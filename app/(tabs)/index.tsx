import artist from '@/assets/Data/Artist';
import ArtistComponent from '@/components/ArtistComponent';
import FootBar from '@/components/FootBar';

export default function TabOneScreen() {
  return (
    <>
    <ArtistComponent  artist={artist}/>
    </>
    
  );
}

