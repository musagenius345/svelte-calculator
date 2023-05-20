import { writable } from 'svelte/store';

export let hue = 0;
export let saturation = 0;
export let lightness = 0;
export let alpha = 1;

export function updateBgColor() {

  alpha = parseFloat(alpha.toFixed(3));

  document.documentElement.style.setProperty(
    '--bg-clr', `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
}


export function updateTxtColor() {

  alpha = parseFloat(alpha.toFixed(3));

  document.documentElement.style.setProperty(
    '--txt-clr', `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
}


