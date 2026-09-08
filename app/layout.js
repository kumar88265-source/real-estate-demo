import './globals.css';

export const metadata = {
  title: 'ELITE ACRES | Luxury Real Estate & Plotted Corridors',
  description: 'Explore premier luxury apartments and plotted corridors across Gurugram, Kharkhoda, and NCR.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
