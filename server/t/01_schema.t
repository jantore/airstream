use strict;
use Test::More tests => 2;

use Airstream::Schema;

my $schema = Airstream::Schema->connect;
isa_ok($schema, 'Airstream::Schema');

isa_ok($schema->resultset('Song'), 'DBIx::Class::ResultSet');
