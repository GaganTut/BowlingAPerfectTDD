/* jshint esversion: 6 */

module.exports = function(scoreData) {
  function checkValid(scoreData) {
    if(!Array.isArray(scoreData) || scoreData.length !== 10) {
      throw new Error("Not A Valid Bowling Input");
    } else {
      for (var i = 0; i < scoreData.length; i++) {
        for (var k in scoreData[i]) {
          if (typeof scoreData[i][k] !== "number") {
            throw new Error("Not A Valid Bowling Input");
          } else {
            return true;
          }
        }
      }
    }
  }

  if(checkValid(scoreData)) {
    let totalScore = 0;
    let currentFrame = 0;
    let bonusPoints = 0;

    for (var i = 0; i < scoreData.length; i++) {
      if (scoreData[i].a === 10) {
        currentFrame += scoreData[i].a;
        if (scoreData[i + 1] !== undefined) {
          bonusPoints += scoreData[i + 1].a;
          if (scoreData[i + 1].a === 10) {
            if (scoreData[i + 2] !== undefined) {
              bonusPoints += scoreData[i + 2].a;
            } else {
              bonusPoints += scoreData[i + 1].b;
            }
          } else {
            bonusPoints += scoreData[i + 1].b;
          }
        } else {
          bonusPoints += scoreData[i].b;
          bonusPoints += scoreData[i].c;
        }
      } else {
        currentFrame += scoreData[i].a;
        currentFrame += scoreData[i].b;

        if (currentFrame === 10) {
          if(scoreData[i + 1] !== undefined) {
            bonusPoints += scoreData[i + 1].a;
          } else {
            bonusPoints += scoreData[i].c;
          }
        }
      }
      totalScore += currentFrame;
      currentFrame = 0;
    }
    totalScore += bonusPoints;
    return totalScore;
  }
};