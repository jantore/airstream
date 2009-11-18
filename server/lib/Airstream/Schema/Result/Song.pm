package Airstream::Schema::Result::Song;


use base qw{ DBIx::Class };

__PACKAGE__->load_components(qw{ Core });
__PACKAGE__->table('Song');

__PACKAGE__->add_columns(
    'id' => {
        data_type         => 'integer',
        is_nullable       => 0,
        is_auto_increment => 1,
    },
    'title' => {
        data_type         => 'text',
        is_nullable       => 0,
    },
    'artist' => {
        data_type         => 'integer',
        is_nullable       => 1,
    },
    'duration' => {
        data_type         => 'integer',
        is_nullable       => 1,
    },
    'file' => {
        data_type         => 'text',
        is_nullable       => 1,
    },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->belongs_to(
    'artist' => 'Airstream::Schema::Result::Artist',
    { 'foreign.id' => 'self.artist' }
);

__PACKAGE__->has_many(
    'entries' => 'Airstream::Schema::Result::PlaylistEntry',
    { 'foreign.song' => 'self.id' },
);

__PACKAGE__->many_to_many(
    'playlists' => 'entries' => 'song'
);

1;
