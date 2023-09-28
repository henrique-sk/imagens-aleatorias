const images = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/83427a03-f511-4a33-abd2-ee2eb51d8d7b/d3ce991-43830f6f-ecf7-49e0-b570-0abae79b38e2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzNDI3YTAzLWY1MTEtNGEzMy1hYmQyLWVlMmViNTFkOGQ3YlwvZDNjZTk5MS00MzgzMGY2Zi1lY2Y3LTQ5ZTAtYjU3MC0wYWJhZTc5YjM4ZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gD_qm-Lk-iQ97KB6fqD1rNK2I4-hiBgR_r1LLClbbB4',
  'https://www.nicepng.com/png/full/936-9365578_one-piece-wallpaper-di-one-piece-sanji.png',
  'https://i.ebayimg.com/images/g/lckAAOSw50Jh04kx/s-l1200.webp',
  'https://stickerswiki.ams3.cdn.digitaloceanspaces.com/naminico/6052763.512.webp',
  'https://i.pinimg.com/originals/76/19/60/761960d3132f0d6c9e1874aa0b718994.png',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99721b1b-2a38-4e77-a5ed-01fa9b797b39/d4jh2vp-aeb2d43d-3a47-4192-b332-14a440907054.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5NzIxYjFiLTJhMzgtNGU3Ny1hNWVkLTAxZmE5Yjc5N2IzOVwvZDRqaDJ2cC1hZWIyZDQzZC0zYTQ3LTQxOTItYjMzMi0xNGE0NDA5MDcwNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Np6kN5914fKNHAWJxqFmc9KT5epSwwHj8PCgtwRVa08',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18daf2ad-dbec-47c0-9c47-fb8c0211bf50/d3jrr1y-87c8456b-15b3-4e35-9015-bacb873b25fc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4ZGFmMmFkLWRiZWMtNDdjMC05YzQ3LWZiOGMwMjExYmY1MFwvZDNqcnIxeS04N2M4NDU2Yi0xNWIzLTRlMzUtOTAxNS1iYWNiODczYjI1ZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0eb-dcdxRxSmz4C2QamTSp5Yh4si3XxneXsnObLMXO0',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ecb21dc-387a-4fb1-9189-108dde3c6435/dfcmg0e-e163ef3e-2ee4-4bd4-9330-c63a89a8e76c.png/v1/fill/w_1280,h_1280/one_piece___buggy_screaming_face_png_by_oneofdpieces_dfcmg0e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzNlY2IyMWRjLTM4N2EtNGZiMS05MTg5LTEwOGRkZTNjNjQzNVwvZGZjbWcwZS1lMTYzZWYzZS0yZWU0LTRiZDQtOTMzMC1jNjNhODlhOGU3NmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YrXv90vli38Y4qY33NFQmmLkfVYwIDLxlYWVB8HpJ4U',
  'https://s3.getstickerpack.com/storage/uploads/sticker-pack/one-piece-6/sticker_17.png?cbef7c80fd36ad8d0521d55f43ca3e3e&d=200x200',
  'https://i.pinimg.com/originals/5f/c7/7a/5fc77a6a70dac565860c833b05a02c0d.png',
  'https://stickerswiki.ams3.cdn.digitaloceanspaces.com/OPanime/1854161.512.webp',
  'https://stickerswiki.ams3.cdn.digitaloceanspaces.com/Jimbei/6449893.512.webp',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6cfa76fb-9227-47db-bd9a-45fd388ea359/d34oo2y-8036f052-cb61-4ee2-ac6d-175f136856de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjZmE3NmZiLTkyMjctNDdkYi1iZDlhLTQ1ZmQzODhlYTM1OVwvZDM0b28yeS04MDM2ZjA1Mi1jYjYxLTRlZTItYWM2ZC0xNzVmMTM2ODU2ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yMHjk6-nRQImubpPA-sgk_vhukdafG4sQtqy14357KM',
  'https://i.pinimg.com/originals/16/4d/10/164d102beed5e7ab26818bbbf683aaf2.png',
  'https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png',  
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function loadImages() {
  const container = document.getElementById('image-container');

  for (let i = 0; i < images.length*5; i++) {
      const image = document.createElement('img');
      image.src = getRandomImage();
      image.classList.add('image');
      container.appendChild(image);
  }
}

loadImages();

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadImages();
  }
});
