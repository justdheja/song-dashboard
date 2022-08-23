import React, { useState, useEffect } from 'react';
import data from '../../mock_data.json'
import MusicListItem from './MusicListItem';

const MusicList = () => {
  const [fixedMusicList, setFixedMusicList] = useState(data.song_playlist.data)
  const [musicList, setMusicList] = useState(data.song_playlist.data)
  const [keyWord, setKeyWord] = useState("")

  useEffect(() => {
    const newList = fixedMusicList.filter((el) => (el.song_name.toUpperCase() + el.band_name.toUpperCase()).includes(keyWord.toUpperCase()))
    setMusicList(newList)
  }, [fixedMusicList, keyWord])

  return (
    <div className="p-10 text-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My music list</h1>
          <p className="text-sm">My recent search list</p>
        </div>
        <input type="text" className="bg-gray-700 px-4 h-10 rounded-2xl" placeholder="Search" onChange={(e) => setKeyWord(e.target.value)}/>
      </div>
      {musicList.map((music, id) => (
        <MusicListItem data={music}/>
      ))}
    </div>
  );
}
 
export default MusicList;