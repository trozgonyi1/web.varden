import type { NextApiRequest, NextApiResponse } from 'next'
const express = require("express");
const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config();

type Data = {
    name: string
}

const allowCors = (fn: (req: NextApiRequest, res: NextApiResponse<Data>) => void) => async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) => {

    res.setHeader('Access-Control-Allow-Credentials', "true")
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    try {
        var sequelize = new Sequelize(process.env.DATABASE_URL, {
          dialectOptions: {
            ssl: { // <1>
              // rejectUnauthorized: true,
            }
          },
        })
        await sequelize.sync({ force: true });
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

    const Varden = sequelize.define("Form", {
        PropertyType: DataTypes.TEXT,
        PreferedMarket: DataTypes.TEXT,
        GroupInvestment: DataTypes.TEXT,
        NumInvestors: DataTypes.TEXT
      }, {
        tableName: "Varden"
      });

      await Varden.sync();

    if(req.method === "POST"){
        console.log('receiving data');
        var PropertyType_ = req.body.PropertyType
        var PreferedMarket_ = req.body.PreferedMarket
        var GroupInvestment_ = req.body.GroupInvestment
        var NumInvestors_ = req.body.NumInvestors

        const upload = Varden.build({PropertyType: PropertyType_, PreferedMarket: PreferedMarket_, GroupInvestment: GroupInvestment_, NumInvestors: NumInvestors_})
        await upload.save();

        res.redirect(200, "/submitted");
    }
  }

  const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const d = new Date()
    res.end(d.toString())
  }
  
  module.exports = allowCors(handler)