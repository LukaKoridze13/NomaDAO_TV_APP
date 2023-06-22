import sound from '../assets/soundeffects/menu-move.mp3'

export default function useMoveSound() {
  const MoveAudio = new Audio(sound);
  MoveAudio.play()
        .catch(error => {
            console.info('Sounds loaded successfully');
        });
}
