"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "The Lost Crew NFT is a collection of 799 Outlaws that have returned to the metaverse after their escape from Yhuko, the destroyer. There are 790 members, 8 are Guardians of the Citadel, and 1 is Yhuko! Every Lost Crew NFT is completely unique, having multiple traits with over 200+ assets.";
const baseUri = "";

//Added metadata for solana
const collectionName = "Lost Crew Member";
const symbol = "OC";
//Define how much % you want from second market sales 1000 = 10%
const seller_fee_basis_points = 500;
const external_url = "";

const layerConfigurations = [
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Background" },
      { name: "Brown" },
      { name: "Nose" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Clothing" },
      { name: "Brown Ears" },
      { name: "Mouth" },
      
      { name: "Glasses" },
      { name: "Durag" },
    ],
  },
  {
    growEditionSizeTo: 110,
    layersOrder: [
      { name: "Background" },
      { name: "Ash" },
      { name: "Nose" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Clothing" },
      { name: "Ashen Ears" },
      { name: "Mouth" },
      
      { name: "Glasses" },
      { name: "Durag" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

// This is a optinal feature you can use to define if your NFT is a part of a collection
const collection = {
  name: "The Lost Crew",
  family: ""
};


//Added metadata for solana
//Leave uri and type at the current way because they are placeholders for arweave
const properties = {
  files: [
      {
        "uri": "image.png",
        "type": "image/png"
      },
    ],
  category: "image",
  creators: [
    {
      "address": "Dr3wk5k5hfhrLvb6JvZMFCBEixAb2mMCmBm8JmY7tuJM",
      "share": 50
    },
    {
      "address": "6BJc94jdF17tofuxQ2HbmPBsEJMgji1Lc4EJqcSsER3t",
      "share": 50
    }
  ]
};

module.exports = {
  format,
  baseUri,
  description,

  //Added metadata for solana
  collectionName,
  symbol,
  seller_fee_basis_points,
  external_url,
  collection,
  properties, 

  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
