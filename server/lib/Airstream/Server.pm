package Airstream::Server;

use strict;
use warnings;

#use Catalyst::Runtime '5.7';
use Catalyst qw{ -Debug Static::Simple };

__PACKAGE__->config(
    name => 'Airstream::Server',
    static => {
        include_path => [ Airstream::Server->path_to('root') ],
        dirs => [ 'file' ]
    },
);
__PACKAGE__->setup;

1;
