var playlist = {aristname1: "song title1", aristname2: "song title2"};

function updatePlaylist (playlist, aristname, songname){
  playlist[aristname] = songname;
  return playlist;
}

function removeFromPlaylist (playlist, aristname2){
  delete playlist.aristname2;
  return playlist;
}