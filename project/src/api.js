function get()
{
    return "http://www.theeasylearnacademy.com/shop/"
}
export default function getBase()
{
    return get() +"ws/";
}
export function getImages()
{
    return get() + "images/"
}
// name of the cookie file to be use everywhere
export const COOKIENAME = ['theeasylearn'];
