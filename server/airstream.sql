CREATE TABLE Artist (
       id INTEGER NOT NULL,
       name TEXT NOT NULL
);

CREATE TABLE Song (
       id     INTEGER NOT NULL,
       title  TEXT NOT NULL,
       artist INTEGER
);

CREATE TABLE Collection (
       id    INTEGER NOT NULL,
       title TEXT NOT NULL,
       artist INTEGER,
       type TEXT NOT NULL -- 'album', 'single', 'compilation'
);

CREATE TABLE CollectionSong (
       song INTEGER NOT NULL,
       collection INTEGER NOT NULL,
       position INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE Playlist (
       id INTEGER NOT NULL,
       name TEXT,
       owner INTEGER,
       shared BOOLEAN
);

CREATE TABLE User (
       id INTEGER NOT NULL,
       username TEXT NOT NULL,
       password VARCHAR(40) NULL
);
