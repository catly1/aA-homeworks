# users
| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |
	
	• index on username, unique: true
	• index on email, unique: true
	• index on session_token, unique: true

# songs
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| album_id    | integer   | not null, indexed, foreign key |
| created_at  | datetime  | not null                       |
| updated_at  | datetime  | not null                       |
	• album_id references Album
	• index on album_id

# albums
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| artist_id   | integer   | not null, indexed, foreign key |
| created_at  | datetime  | not null                       |
| updated_at  | datetime  | not null                       |
	• artist_id references Artist
	• index on artist_id

# artists
| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

# liked_songs
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| user_id     | integer   | not null, indexed, foreign key |
| song_id     | integer   | not null, indexed, foreign key |
| created_at  | datetime  | not null                       |
| updated_at  | datetime  | not null                       |
	• user_id references users
	• song_id references songs
	• index on [:song_id, :user_id], unique: true

# playlist
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| name     | integer   | not null, indexed, foreign key |
| author_id     | integer   | not null, indexed, foreign key |
| created_at  | datetime  | not null                       |
| updated_at  | datetime  | not null  

	• author_id references users
	• index on :user_id

# playlist_songs (joins table)
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| playlist_id     | integer   | not null, indexed, foreign key |
| song_id     | integer   | not null, indexed, foreign key |

	• playlist_id references playlists
	• song_id references songs
	• index on :user_id