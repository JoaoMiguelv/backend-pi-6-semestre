import fs from 'fs';
import path from 'path';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('Por favor, forneça o nome do módulo como argumento ao executar o script.');
  process.exit(1);
}

const generateRouterContent = (moduleName) => {
  return `
import CommonRoute from '../../commons/CommonRoute.js';
import ${moduleName}Controller from '../../controllers/${moduleName}Controller.js';

export default class ${moduleName}Router extends CommonRoute {
  constructor() {
    super(new ${moduleName}Controller());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
`;
};

const generateControllerContent = (moduleName) => {
  return `
import CommonController from '../commons/CommonController.js';
import ${moduleName}Service from '../services/${moduleName}Service.js';

export default class ${moduleName}Controller extends CommonController {
  constructor() {
    super(new ${moduleName}Service());
  }
}
`;
};

const generateServiceContent = (moduleName) => {
  // Convertendo a primeira letra para minúscula
  const firstLetterLowercase = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);

  return `
import CommonService from '../commons/CommonService.js';
import { ${moduleName} } from '../models/${moduleName}Model.js';

export default class ${moduleName}Service extends CommonService {
  constructor() {
    super(${moduleName});
    this.${firstLetterLowercase}Model = ${moduleName};
  }
}
`;
};

const generateModelContent = (moduleName) => {
  return `
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class ${moduleName}Model {
  static init() {
    return sequelize.define(
      'table_name',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        
      },
      {
        tableName: 'table_name', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      }
    );
  }
}

export const ${moduleName} = ${moduleName}Model.init();
`;
};

try {
  const routerContent = generateRouterContent(moduleName);
  const controllerContent = generateControllerContent(moduleName);
  const serviceContent = generateServiceContent(moduleName);
  const modelContent = generateModelContent(moduleName);

  fs.writeFileSync(path.join('src', 'routes/api', `${moduleName}.js`), routerContent);
  fs.writeFileSync(path.join('src', 'controllers', `${moduleName}Controller.js`), controllerContent);
  fs.writeFileSync(path.join('src', 'services', `${moduleName}Service.js`), serviceContent);
  fs.writeFileSync(path.join('src', 'models', `${moduleName}Model.js`), modelContent);

  console.log(`Estrutura do backend para o módulo ${moduleName} criada com sucesso.`);
} catch (error) {
  console.error('Erro ao criar estrutura de backend:', error);
}
