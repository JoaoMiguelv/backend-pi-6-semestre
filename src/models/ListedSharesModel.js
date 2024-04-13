
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class ListedSharesModel {
  static init() {
    return sequelize.define(
      'listed_shares',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        ticker: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        b3_sector_classification: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        id_profile: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'profiles',
            key: 'id',
          },
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        tableName: 'listed_shares', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      }
    );
  }
}

export const ListedShares = ListedSharesModel.init();
