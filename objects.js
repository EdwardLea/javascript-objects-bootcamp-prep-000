var playlist = {aristname1: "song title1", aristname2: "song title2"};

function updatePlaylist (playlist, aristname, songname){
  playlist[aristname] = songname;
  return playlist;
}

function removeFromPlaylist (playlist1, aristname){
  delete playlist1.aristname;
  return playlist1;
}