
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class ListedShareHistoryModel {
  static init() {
    return sequelize.define(
      'listed_share_history',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        id_listed_shares: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'listed_shares',
            key: 'id',
          },
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        last_value: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
        },
        opening: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
        },
        high: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
        },
        low: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
        },
        trading_volume: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
        },
        percentage_change: {
          type: DataTypes.DECIMAL(15, 4),
          allowNull: false,
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
        tableName: 'listed_share_history', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      }
    );
  }
}

export const ListedShareHistory = ListedShareHistoryModel.init();
