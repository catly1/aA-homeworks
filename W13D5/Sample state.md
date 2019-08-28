```javascript
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "Carlos",
        liked_songs: [123, 96, 546],
        playlist: [1,2,3] 
      },
      2: {
        id: 2,
        username: "catly",
        liked_songs: [456, 945, 34],
        playlist: [1,2,3]
      }
    },  /

    playlists: {
      1: {          
        id: 1,
        name: "Default" // Maybe all the liked songs go here?
        author_id: 1,
        song_ids: [1, 2, 3, 34],
      },
      2: {
        id: 2,
        name: "My Awesome Playlist",
        author_id: 1,
        song_ids: [99, 222, 302, 400],
      }
    },  

    songs: {
        1: {
            id: 1,
            title: 'Halation of the War',
            length: '5:00',
            artist_id: 1,
            album_id: 1,
        },
        2: {
            id: 2,
            title: "What's going on?",
            length: '4:43',
            artist_id: 2,
            album_id: 2,
        }
    },  

    albums: {
      1: {
        id: 1,
        artist_id: 1,
        title: 'Novatic',
      },
      2: {
        id: 2,
        artist_id: 2,
        title: 'Flippin',
      },
    }, 

    artists: {
      1: {
        id: 1,
        name: 'Walkure',
      },
      2: {
        id: 2,
        name: 'Hige',
      }
    },
    
  }, 

}

```