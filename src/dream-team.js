module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    members = members.map(function (member) {
      if (typeof member === 'string') {
        return member.trim()[0].toUpperCase();
      }
    }).sort().join('');
    return members;
  }
}
