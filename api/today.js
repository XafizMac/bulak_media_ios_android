import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';

const params = CalculationMethod.MoonsightingCommittee();
const coordinates = new Coordinates(42.872033, 74.596160)
const date = new Date(2022, 3, 20);
const prayerTimes = new PrayerTimes(coordinates, date, params);
export default function Today() {
    console.log(prayerTimes.fajr);
    return { prayerTimes }
}
