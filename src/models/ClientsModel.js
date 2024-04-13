import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class ClientsModel {
  static init() {
    return sequelize.define(
      'clients',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: DataTypes.ENUM({
            values: ['F', 'J'],
            name: 'client_type',
          }),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        document: {
          type: DataTypes.STRING,
        },
        observation: {
          type: DataTypes.STRING,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        id_profile: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'profiles',
            key: 'id',
          },
        },
      },
      {
        tableName: 'clients', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      },
    );
  }
}

export const Clients = ClientsModel.init();
