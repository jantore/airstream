package Airstream::Schema::Result::Playlist;

use base qw{ DBIx::Class };

__PACKAGE__->load_components(qw{ Core });
__PACKAGE__->table('Playlist');

__PACKAGE__->add_columns(
    'id' => {
        data_type         => 'integer',
        is_nullable       => 0,
        is_auto_increment => 1,
    },
    'name' => {
        data_type   => 'text',
        is_nullable => 0,
    },
    'owner' => {
        data_type   => 'integer',
        is_nullable => 0,
    },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->has_many(
    'entries' => 'Airstream::Schema::Result::PlaylistEntry',
    { 'foreign.playlist' => 'self.id' },
);

__PACKAGE__->many_to_many(
    'songs' => 'entries' => 'song'
);

1;
