import React from 'react';

const MusicTable = (props) => {
    return ( 
<div>
    <table>
     <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Release Date</th>
        <th>Genre</th>
      </tr>
    </thead>
    {props.songList.map((song) => {
      return (
    <tbody>
      <tr>
          <td>{song.title}</td>
          <td>{song.artist}</td>
          <td>{song.album}</td>
          <td>{song.release_date}</td>
          <td>{song.genre}</td>
          <button onClick={() => props.deleteASong(song.id)}>Delete</button>
       </tr> 
    </tbody>
      )
      })}

  </table>
</div>

     );
   
}     

export default MusicTable;