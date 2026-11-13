---
title: How to use the Project Pavilion map
sidebar_label: How to use the map
description:
  Find a CNCF project at the KubeCon Project Pavilion, see who is at each kiosk
  at any time of the showcase, and share a link to a moment in the schedule
sidebar_position: 2
tags:
  - events
  - kubecon
  - project-pavilion
---

The [Project Pavilion map](./index.md) shows which CNCF projects are at each
kiosk in the Project Pavilion, for any day and time of the showcase. During the
showcase it follows the clock, so you can open it on your phone on the show
floor and see who is there now.

## Reading the map

The map is laid out like the Pavilion. Each numbered stand has two kiosks, **A**
and **B**, and the stand's number is printed between them. The Pavilion stage,
the lounge and the CNCF staff areas are marked as well.

Each kiosk shows one of these:

- **A project name**: that project is at the kiosk at the selected time.
- **_Next:_ a project name and a time**: the kiosk is between shifts, and the
  named project arrives at that time.
- **Between shifts**: the kiosk has had a project today, but no other project is
  scheduled there later today.
- **—**: no project is scheduled at the kiosk that day.
- **Two names with a red border**: the kiosk is double-booked in the schedule.

Blue kiosks are Kubernetes SIG Subprojects.

Point at a kiosk (or move to it with the Tab key) to see a one-line summary of
the project under the map: its name, whether it is a CNCF graduated, incubating
or sandbox project or a SIG Subproject, and what it does. Click or tap a kiosk
to open the project's repository in a new tab.

## Choosing a day and time

Under the map:

- **Day buttons** choose the showcase day.
- **The time slider** moves through that day in 5-minute steps. The slider is
  coloured by shift: the morning shift, the changeover between shifts (the pale
  band), and the afternoon shift. The changeover times are printed under the
  slider.
- **Now** jumps to the current time and keeps the map following the clock; the
  button then reads **● Live**. Moving the slider or picking a day stops
  following the clock. The Now button only works while the Pavilion is open.

All times are local to the event. The time zone is shown under the map.

## Finding a project

Type at least two letters of a project's name in **Find a project**. Matching
kiosks are outlined on the map, and a list under the search box shows, for each
match, its kiosk, whether it is there at the selected time, and all of its
shifts.

- When the name you type matches a single project, the map jumps to that
  project's next shift if it isn't at its kiosk at the selected time.
- Click a shift in the list to go to the start of that shift.
- On a narrow screen, the map scrolls sideways to bring the first matching kiosk
  into view.
- Press Escape to clear the search.

## Sharing a moment in the schedule

When you pick a day or time, the page's address changes to include it, for
example:

```text
/events/project-pavilion-map?day=wed&time=14:00
```

Share that link to show someone the map at that moment. `day` can be a short day
name (`tue`), a full weekday (`wednesday`) or a date (`2026-11-12`). `time` is
24-hour local time. When the map is following the clock, the address has no day
or time, so the link always opens on the current time.

## Where the schedule comes from

The schedule is the Project Pavilion Kiosk Directory published by the KubeCon +
CloudNativeCon events team, linked under the map. While an event is on, the map
reads the directory every 15 minutes, so changes made on the day show up without
a site update. If the directory can't be reached, the map uses the copy saved
with the site, and says when that copy was made. A note under the map counts any
directory entries the map couldn't read.

If the map and a sign at the Pavilion disagree, trust the sign and let us know
by [opening an issue](https://github.com/cncf/contribute-site/issues).

## Past events

After an event ends, its map is kept with the final schedule, so you can look
back at who was at the Pavilion. Past maps no longer read the live directory and
have no Now button. They are listed in this section of the site:

- [KubeCon + CloudNativeCon North America 2026](./kubecon-na-2026.md)

## Without JavaScript

With JavaScript turned off, and in the page's Markdown version for AI agents and
other tools, the map is replaced by a table of the kiosks and projects at the
opening of the first showcase day.
