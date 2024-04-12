
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class InvestmentPortfolioModel {
  static init() {
    return sequelize.define(
      'investment_portfolio',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        id_client: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'clients',
            key: 'id',
          },
        },
        id_listed_shares: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'listed_shares',
            key: 'id',
          },
        },
        share_price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        quantity_purchased: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        invested_amount: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
      {
        tableName: 'investment_portfolio', // Nome da tabela existente no banco de dados
        timestamps: true, // Define se deve incluir campos de data de criação/atualização
        createdAt: 'created_at', // Nome do campo de data de criação
        updatedAt: 'updated_at', // Nome do campo de data de atualização
        deletedAt: 'deleted_at', // Nome do campo de data de exclusão
        paranoid: true, // Define se deve incluir campo de exclusão
      }
    );
  }
}

export const InvestmentPortfolio = InvestmentPortfolioModel.init();
