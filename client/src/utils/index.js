import {surpriseMePrompts} from '../constants/constants';
import Filesaver from 'file-saver';

export function getRandomPrompt() {
   
  return surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];
  
  
}
export function downloadImage(key,imageUrl) {
    Filesaver.saveAs(imageUrl,``+key+`.jpeg`)
}