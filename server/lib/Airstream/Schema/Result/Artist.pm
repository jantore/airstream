package Airstream::Schema::Result::Artist;

use base qw{ DBIx::Class };

__PACKAGE__->load_components(qw{ Core });
__PACKAGE__->table('Artist');

__PACKAGE__->add_columns(
    'id' => {
        data_type         => 'integer',
        is_nullable       => 0,
        is_auto_increment => 1,
#        default_value     => '',
    },
    'name' => {
        data_type         => 'text',
        is_nullable       => 0,
    },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->has_many(
    'songs' => 'Airstream::Schema::Result::Song',
    { 'foreign.artist' => 'self.id' },
);

1;
