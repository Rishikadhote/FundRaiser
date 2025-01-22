const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  donorName: String,
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaigns" },
  donationAmount: Number,

});

const DonationModel = mongoose.model("Donations", DonationSchema);

module.exports = DonationModel;
