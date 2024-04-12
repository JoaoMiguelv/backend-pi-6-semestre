
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class ProfilesModel {
  static init() {
    return sequelize.define(
      'profiles',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: DataTypes.ENUM({
            values: ['conservative', 'moderate', 'aggressive'],
            name: 'profile_type',
          }),
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'profile', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      }
    );
  }
}

export const Profiles = ProfilesModel.init();
