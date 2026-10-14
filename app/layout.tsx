import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Rehan Antulay — SharePoint & Power Platform Developer',description:'Enterprise applications and automation built with Microsoft Power Platform and SharePoint Online.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
