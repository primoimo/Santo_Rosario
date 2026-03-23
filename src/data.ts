export const PRAYERS = {
  sinalDaCruz: {
    title: "Sinal da Cruz",
    text: "Pelo sinal da Santa Cruz, livrai-nos, Deus, Nosso Senhor, dos nossos inimigos. Em nome do Pai e do Filho e do Espírito Santo. Amém."
  },
  oferecimento: {
    title: "Oferecimento",
    text: "Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da nossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção."
  },
  creio: {
    title: "Creio",
    text: "Creio em Deus Pai Todo-Poderoso, criador do céu e da terra. E em Jesus Cristo, seu único Filho Nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos Céus, está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém."
  },
  paiNosso: {
    title: "Pai Nosso",
    text: "Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém."
  },
  aveMaria: {
    title: "Ave Maria",
    text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém."
  },
  gloria: {
    title: "Glória ao Pai",
    text: "Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém."
  },
  ohMeuJesus: {
    title: "Ó Meu Jesus",
    text: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente as que mais precisarem."
  },
  salveRainha: {
    title: "Salve Rainha",
    text: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro nos mostrai Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém."
  },
  agradecimento: {
    title: "Agradecimento",
    text: "Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e para mais vos obrigar vos saudamos com uma Salve Rainha..."
  }
};

export const MYSTERIES = {
  gozosos: {
    name: "Mistérios Gozosos",
    days: [1, 6], // Segunda, Sábado
    mysteries: [
      {
        title: "1º Mistério Gozoso",
        meditation: "A Anunciação do Arcanjo São Gabriel a Nossa Senhora.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Annunciation_from_13th_century_Armenian_Gospel.jpg/1280px-Annunciation_from_13th_century_Armenian_Gospel.jpg"
      },
      {
        title: "2º Mistério Gozoso",
        meditation: "A Visitação de Nossa Senhora a sua prima Santa Isabel.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Giotto_di_Bondone_-_No._16_Scenes_from_the_Life_of_the_Virgin_-_7._Visitation_-_WGA09192.jpg"
      },
      {
        title: "3º Mistério Gozoso",
        meditation: "O Nascimento do Menino Jesus em Belém.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Adoration_of_the_sheperds_-_Matthias_Stomer.jpg/1280px-Adoration_of_the_sheperds_-_Matthias_Stomer.jpg"
      },
      {
        title: "4º Mistério Gozoso",
        meditation: "A Apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Andrea_Mantegna_-_The_Presentation_-_Google_Art_Project.jpg/1280px-Andrea_Mantegna_-_The_Presentation_-_Google_Art_Project.jpg"
      },
      {
        title: "5º Mistério Gozoso",
        meditation: "A Perda e o Encontro do Menino Jesus no Templo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Disputa_con_los_doctores_%28El_Veron%C3%A9s%29_grande.jpg/1280px-Disputa_con_los_doctores_%28El_Veron%C3%A9s%29_grande.jpg"
      }
    ]
  },
  dolorosos: {
    name: "Mistérios Dolorosos",
    days: [2, 5], // Terça, Sexta
    mysteries: [
      {
        title: "1º Mistério Doloroso",
        meditation: "A Agonia de Jesus no Horto das Oliveiras.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Gethsemane_Carl_Bloch.jpg"
      },
      {
        title: "2º Mistério Doloroso",
        meditation: "A Flagelação de Jesus atado à coluna.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/William-Adolphe_Bouguereau_%281825-1905%29_-_The_Flagellation_of_Our_Lord_Jesus_Christ_%281880%29.jpg"
      },
      {
        title: "3º Mistério Doloroso",
        meditation: "A Coroação de Espinhos de Jesus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Michelangelo_Merisi%2C_called_Caravaggio_-_The_Crowning_with_Thorns_-_Google_Art_Project.jpg"
      },
      {
        title: "4º Mistério Doloroso",
        meditation: "Jesus Carregando a Cruz a caminho do Calvário.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/5_Andrea_di_Bartolo._Way_to_Calvary._c._1400%2C_Thissen-Bornhemisza_coll._Madrid.jpg"
      },
      {
        title: "5º Mistério Doloroso",
        meditation: "A Crucificação e Morte de Jesus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristo_crucificado.jpg/1280px-Cristo_crucificado.jpg"
      }
    ]
  },
  gloriosos: {
    name: "Mistérios Gloriosos",
    days: [0, 3], // Domingo, Quarta
    mysteries: [
      {
        title: "1º Mistério Glorioso",
        meditation: "A Ressurreição de Jesus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Carl_Heinrich_Bloch_-_The_Resurrection.jpg"
      },
      {
        title: "2º Mistério Glorioso",
        meditation: "A Ascensão de Jesus ao Céu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Wga_Garofalo_Ascension_of_Christ.jpg"
      },
      {
        title: "3º Mistério Glorioso",
        meditation: "A Descida do Espírito Santo sobre Nossa Senhora e os Apóstolos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pentecost%C3%A9s_%28El_Greco%2C_1597%29.jpg"
      },
      {
        title: "4º Mistério Glorioso",
        meditation: "A Assunção de Nossa Senhora ao Céu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Duomo_%28Verona%29_-_Cartolari-Nichesola_Chapel_-_L%27assunzione_del_Tiziano.jpg"
      },
      {
        title: "5º Mistério Glorioso",
        meditation: "A Coroação de Nossa Senhora como Rainha do Céu e da Terra.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Diego_Vel%C3%A1zquez_-_Coronation_of_the_Virgin_-_Prado.jpg"
      }
    ]
  },
  luminosos: {
    name: "Mistérios Luminosos",
    days: [4], // Quinta
    mysteries: [
      {
        title: "1º Mistério Luminoso",
        meditation: "O Batismo de Jesus no rio Jordão.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/El_bautismo_de_Jes%C3%BAs%2C_por_Jos%C3%A9_Ferraz_de_Almeida_J%C3%BAnior.jpg"
      },
      {
        title: "2º Mistério Luminoso",
        meditation: "A Auto-revelação de Jesus nas Bodas de Caná.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paolo_Veronese_008.jpg/1280px-Paolo_Veronese_008.jpg"
      },
      {
        title: "3º Mistério Luminoso",
        meditation: "O Anúncio do Reino de Deus e o convite à conversão.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Sermon-on-the-mount.jpg"
      },
      {
        title: "4º Mistério Luminoso",
        meditation: "A Transfiguração de Jesus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Transfigurazione_%28Raffaello%29_September_2015-1a.jpg"
      },
      {
        title: "5º Mistério Luminoso",
        meditation: "A Instituição da Eucaristia.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg"
      }
    ]
  }
};

export function getMysteryForToday() {
  const day = new Date().getDay();
  for (const key in MYSTERIES) {
    if (MYSTERIES[key as keyof typeof MYSTERIES].days.includes(day)) {
      return MYSTERIES[key as keyof typeof MYSTERIES];
    }
  }
  return MYSTERIES.gloriosos; // Fallback
}

export function generateSequence(mysterySet: typeof MYSTERIES.gozosos) {
  const sequence = [];

  // Introduction
  sequence.push({ type: 'intro', ...PRAYERS.sinalDaCruz });
  sequence.push({ type: 'intro', ...PRAYERS.oferecimento });
  sequence.push({ type: 'intro', ...PRAYERS.creio });
  sequence.push({ type: 'intro', ...PRAYERS.paiNosso });
  
  // 3 Ave Marias for Faith, Hope, Charity
  for (let i = 0; i < 3; i++) {
    sequence.push({ type: 'intro', ...PRAYERS.aveMaria, subtitle: `(${i + 1}/3) Para aumento da nossa fé, esperança e caridade` });
  }
  sequence.push({ type: 'intro', ...PRAYERS.gloria });

  // 5 Decades
  mysterySet.mysteries.forEach((mystery, index) => {
    // Mystery Announcement & Meditation
    sequence.push({ 
      type: 'mystery', 
      title: mystery.title, 
      text: mystery.meditation,
      image: mystery.image,
      decade: index + 1
    });
    
    sequence.push({ type: 'decade', ...PRAYERS.paiNosso, decade: index + 1 });
    
    // 10 Ave Marias
    for (let i = 0; i < 10; i++) {
      sequence.push({ 
        type: 'decade', 
        ...PRAYERS.aveMaria, 
        subtitle: `(${i + 1}/10)`,
        decade: index + 1,
        image: mystery.image
      });
    }
    
    sequence.push({ type: 'decade', ...PRAYERS.gloria, decade: index + 1 });
    sequence.push({ type: 'decade', ...PRAYERS.ohMeuJesus, decade: index + 1 });
  });

  // Conclusion
  sequence.push({ type: 'outro', ...PRAYERS.agradecimento });
  sequence.push({ type: 'outro', ...PRAYERS.salveRainha });
  sequence.push({ type: 'outro', ...PRAYERS.sinalDaCruz });

  return sequence;
}
