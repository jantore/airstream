package Airstream::Server::Controller::Root;

use strict;
use warnings;

use base qw{ Catalyst::Controller };

__PACKAGE__->config->{'namespace'} = '';

sub default : Private {
    my ($self, $c) = @_;
    $c->response->status(404);
    $c->response->body("404 Not Found");
}

sub playlists : Local {
    my ($self, $c) = @_;

    $c->{'stash'}->{'playlists'} = [
        map {
            {
                id   => $_->id,
                name => $_->name,
            }
        } $c->model('DB')->resultset('Playlist')->all
    ];
}

sub search : Local {
    my ($self, $c) = @_;

    $c->{'stash'}->{'results'} = [];

    my $query = $c->request->param('query');
    #return unless defined $query;

    my $rs = $c->model('DB')->resultset('Song');
    for(split(/ /, $query)) {
        $rs = $rs->search({
            title => { '-like' => '%' . $_ . '%' },
        });
    }

    $c->{'stash'}->{'results'} = [
        map {
            {
                id       => $_->id,
                title    => $_->title,
                artist   => $_->artist->name,
                duration => $_->duration,
                # TODO Fix album field.
                album    => '',
                # TODO Fix file path.
                url      => sprintf("%s/%s", $c->config->{'data_path'}, $_->file),
            }
        } $rs->all
    ]
}

sub end : ActionClass('RenderView') { }

1;
