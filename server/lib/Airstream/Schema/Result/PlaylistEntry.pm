package Airstream::Schema::Result::PlaylistEntry;

use base qw{ DBIx::Class };

__PACKAGE__->load_components(qw{ Core });
__PACKAGE__->table('PlaylistEntry');

__PACKAGE__->add_columns(
    'playlist' => {
        data_type => 'integer',
        is_nullable => 0,
    },
    'song' => {
        data_type => 'integer',
        is_nullable => 0,
    },
);

__PACKAGE__->belongs_to(
    'playlist' => 'Airstream::Schema::Result::Playlist',
    { 'foreign.id' => 'self.playlist' },
);

__PACKAGE__->belongs_to(
    'song' => 'Airstream::Schema::Result::Song',
    { 'foreign.id' => 'self.song' },
);

1;
