package Airstream::Server;

use strict;
use warnings;

#use Catalyst::Runtime '5.7';
use Catalyst qw{ -Debug ConfigLoader };

__PACKAGE__->config(
    name        => 'Airstream::Server',
    'Plugin::ConfigLoader' => {
	driver  => {
	    General => { -LowerCaseNames => 1 },
	},
    },
);
__PACKAGE__->setup;

1;
