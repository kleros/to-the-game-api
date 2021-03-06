const Profile = require('../models/Profile')

exports.getBestScores = async (req, res) => {
  return res.status(201).json(await getBestScoresDb(Profile))
}

const getBestScoresDb = Profile => {
  return new Promise((resolve, reject) => {
    Profile
      .find({}, {sign_msg: 0})
      .sort({best_score: -1})
      .sort({amount: -1})
      .sort({best_score_timestamp: 1})
      .exec(
        (err, Profile) => {
          if (err) {
            reject(Error(err))
          }
          resolve(Profile)
        }
      )
  })
}
