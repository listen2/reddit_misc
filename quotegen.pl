#!/usr/bin/perl

use strict;
use POSIX;

sub alphize {
	return @_[0] if (@_[0] <= 9);
	return chr(@_[0]+ord('a')-10) if (@_[0] < 36);
	return alphize(@_[0]%36).alphize(floor(@_[0]/36));
}

my @lines;

my $i = 0;
open(INFILE, "<".$ARGV[0]);
while (<INFILE>) {
	chomp;
	push(@lines, "input[name=\"uh\"][value^=\"".alphize($i)."\"] ~ a::after{content:\"".$_."\"}");
	$i++;
}

for my $f (reverse @lines) {
	print $f;
}
