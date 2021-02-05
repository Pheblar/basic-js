module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    const dreamTeam = []
    let drTmUppOnly = [];
    let drTmUpp;
    let sorted;
    let sortedArr;
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        dreamTeam.push(members[i]);
        drTmUpp = dreamTeam.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        drTmUppOnly.push(drTmUpp[i].trim().charAt(0));
        sortedArr = drTmUppOnly.sort();
        sorted = sortedArr.join('');
      }
    }
    return sorted;
  }
};
