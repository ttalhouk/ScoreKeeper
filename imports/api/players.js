import {Mongo} from 'meteor/mongo';
var numeral = require('numeral');

export const Players = new Mongo.Collection ('players');

export const calculatePlayerPosition = (players) => {
  let rank = 1;

  return players.map((player, idx) => {
    if (idx !== 0 && players[idx - 1].score > player.score) {
      rank++;
    }
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  });
}
