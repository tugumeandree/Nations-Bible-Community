// Sermons Page Functionality - Search, Filter, Sort

// Sample sermon data (in production, this would come from a CMS/database)
const sermonData = {
  sermon1: {
    title: "Hope in Christ",
    scripture: "1 Peter 1:3-9",
    series: "Living Hope",
    speaker: "Andrew Tugume",
    date: "January 10, 2026",
    duration: "42 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube embed
    audioUrl: "", // Replace with actual audio URL
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>Good evening, friends. Tonight we're diving into 1 Peter chapter 1, verses 3 through 9, where the apostle Peter writes about the living hope we have through Jesus Christ's resurrection.</p>
        
        <p><span class="transcript-timestamp">01:15</span>Peter begins with praise: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead."</p>
        
        <p><span class="transcript-timestamp">03:42</span>Notice the word "living" hope. This isn't a dead hope, a wishful thinking, or mere optimism. This is a living, active, vibrant hope that is rooted in the resurrection of Jesus Christ. When Jesus rose from the dead, everything changed.</p>
        
        <p><span class="transcript-timestamp">07:20</span>Peter continues in verse 4: "to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you." Our hope is not in temporary things that rust, decay, or fade away. Our hope is in an eternal inheritance that God himself is keeping safe for us.</p>
        
        <p><span class="transcript-timestamp">12:35</span>But Peter doesn't stop there. He acknowledges the reality of trials: "In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials." The Christian life isn't exempt from suffering. But here's the key: these trials have a purpose.</p>
        
        <p><span class="transcript-timestamp">18:50</span>Verse 7 tells us these trials come "so that the tested genuineness of your faith—more precious than gold that perishes though it is tested by fire—may be found to result in praise and glory and honor at the revelation of Jesus Christ."</p>
        
        <p><span class="transcript-timestamp">25:10</span>Your faith is more valuable than gold. And just as gold is refined by fire, your faith is refined through trials. But unlike gold, which eventually perishes, your refined faith lasts forever and brings glory to God.</p>
        
        <p><span class="transcript-timestamp">32:45</span>Peter concludes this passage with these beautiful words in verses 8-9: "Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls."</p>
        
        <p><span class="transcript-timestamp">38:20</span>We haven't seen Jesus with our physical eyes, yet we love him. We don't see him now, yet we believe. And this belief, this faith, produces a joy that words cannot express—a joy filled with glory because we know the outcome: the salvation of our souls.</p>
        
        <p><span class="transcript-timestamp">41:00</span>So tonight, my friends, whatever trials you're facing, hold on to this living hope. Your faith is being refined. Your inheritance is secure. And your salvation is guaranteed through Jesus Christ our Lord. Amen.</p>
      </div>
    `
  },
  sermon2: {
    title: "God's Faithfulness",
    scripture: "Lamentations 3:22-33",
    series: "Great Is Your Faithfulness",
    speaker: "Andrew Tugume",
    date: "January 3, 2026",
    duration: "38 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "",
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>Welcome to 2026! What a way to start the year—meditating on the faithfulness of God. Turn with me to Lamentations chapter 3.</p>
        
        <p><span class="transcript-timestamp">02:15</span>The book of Lamentations was written during one of Israel's darkest hours—the destruction of Jerusalem. Yet in the middle of this book of sorrow, we find these incredible verses about God's faithfulness.</p>
        
        <p><span class="transcript-timestamp">05:30</span>Verse 22: "The steadfast love of the LORD never ceases; his mercies never come to an end." Even when everything around you is falling apart, God's love never stops. His mercies never run out.</p>
        
        <p><span class="transcript-timestamp">10:45</span>Verse 23 continues: "they are new every morning; great is your faithfulness." Every single morning, God's mercies are fresh, renewed, ready for you. Yesterday's mercy was sufficient for yesterday. Today, you get new mercy for today's challenges.</p>
        
        <p><span class="transcript-timestamp">16:20</span>This is why we can face each day with confidence. Not because we're strong, but because God is faithful. Not because our circumstances are perfect, but because our God never changes.</p>
        
        <p><span class="transcript-timestamp">22:35</span>Verse 24: "The LORD is my portion," says my soul, "therefore I will hope in him." When you have God, you have everything you need. He is your portion—your inheritance, your treasure, your sufficiency.</p>
        
        <p><span class="transcript-timestamp">28:50</span>Notice verse 25: "The LORD is good to those who wait for him, to the soul who seeks him." God rewards those who wait on him, who seek him, who trust in his timing.</p>
        
        <p><span class="transcript-timestamp">34:15</span>So as we begin this new year, let me encourage you: No matter what comes your way in 2026, God's faithfulness remains constant. His mercies are new every morning. Great is His faithfulness!</p>
      </div>
    `
  },
  sermon3: {
    title: "The Word Became Flesh",
    scripture: "John 1:1-14",
    series: "Gospel of John",
    speaker: "Andrew Tugume",
    date: "December 27, 2025",
    duration: "45 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "",
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>We've just celebrated Christmas, and tonight we're reflecting on the magnificent truth of the incarnation—God becoming flesh.</p>
        
        <p><span class="transcript-timestamp">03:20</span>John chapter 1 begins with these profound words: "In the beginning was the Word, and the Word was with God, and the Word was God." This Word is Jesus Christ.</p>
        
        <p><span class="transcript-timestamp">08:45</span>Verse 14 declares: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth."</p>
        
        <p><span class="transcript-timestamp">15:30</span>Think about this: The eternal God, the Creator of the universe, took on human flesh. He didn't just appear to be human—he became truly human while remaining fully God.</p>
        
        <p><span class="transcript-timestamp">22:10</span>Why did he do this? To dwell among us. To bring us grace and truth. To show us the Father. To save us from our sins.</p>
        
        <p><span class="transcript-timestamp">30:25</span>The incarnation is not just a Christmas doctrine—it's the foundation of our faith. If Jesus isn't truly God and truly man, we have no Savior.</p>
        
        <p><span class="transcript-timestamp">38:40</span>But praise God, Jesus is both! Fully God, so his sacrifice has infinite value. Fully man, so he can represent us before the Father. This is the glorious truth of the incarnation.</p>
      </div>
    `
  },
  sermon4: {
    title: "The Lord is My Shepherd",
    scripture: "Psalm 23",
    series: "Psalms for Today",
    speaker: "Andrew Tugume",
    date: "December 20, 2025",
    duration: "35 min",
    videoUrl: "",
    audioUrl: "",
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>Tonight we turn to perhaps the most famous psalm in all of Scripture—Psalm 23. "The LORD is my shepherd; I shall not want."</p>
        
        <p><span class="transcript-timestamp">04:15</span>David begins with a declaration: The LORD is MY shepherd. This is personal. God isn't just a shepherd—he's YOUR shepherd.</p>
        
        <p><span class="transcript-timestamp">09:30</span>"He makes me lie down in green pastures. He leads me beside still waters." The Good Shepherd provides rest, nourishment, and peace.</p>
        
        <p><span class="transcript-timestamp">16:45</span>"He restores my soul. He leads me in paths of righteousness for his name's sake." When you're weary, he restores you. When you're lost, he guides you.</p>
        
        <p><span class="transcript-timestamp">23:20</span>"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me." Notice: not IF you walk through valleys, but WHEN. Valleys are part of the journey. But you don't walk alone.</p>
        
        <p><span class="transcript-timestamp">29:55</span>"Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever." This is our hope: God's goodness and mercy pursuing us, and an eternal home with him.</p>
      </div>
    `
  },
  sermon5: {
    title: "Called Out of Darkness",
    scripture: "1 Peter 2:9-10",
    series: "Living Hope",
    speaker: "Andrew Tugume",
    date: "December 13, 2025",
    duration: "40 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "",
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>Tonight we're looking at our identity in Christ from 1 Peter 2:9-10. Who are you as a believer?</p>
        
        <p><span class="transcript-timestamp">03:40</span>Peter writes: "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession."</p>
        
        <p><span class="transcript-timestamp">10:25</span>You are CHOSEN—not by accident, but by God's sovereign choice. You are ROYAL—part of God's kingdom. You are a PRIEST—with direct access to God. You are HOLY—set apart for God's purposes.</p>
        
        <p><span class="transcript-timestamp">18:50</span>And why? "That you may proclaim the excellencies of him who called you out of darkness into his marvelous light."</p>
        
        <p><span class="transcript-timestamp">25:15</span>You were in darkness—spiritual blindness, separation from God, slavery to sin. But God called you OUT of that darkness INTO his marvelous light.</p>
        
        <p><span class="transcript-timestamp">32:30</span>Verse 10: "Once you were not a people, but now you are God's people; once you had not received mercy, but now you have received mercy."</p>
        
        <p><span class="transcript-timestamp">37:45</span>This is your identity. This is who you are in Christ. So live like it! Proclaim his excellencies. Walk in the light. Be who God has called you to be.</p>
      </div>
    `
  },
  sermon6: {
    title: "Born Again",
    scripture: "John 3:1-16",
    series: "Gospel of John",
    speaker: "Andrew Tugume",
    date: "December 6, 2025",
    duration: "48 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "",
    transcript: `
      <div class="transcript-text">
        <p><span class="transcript-timestamp">00:00</span>Tonight we encounter Nicodemus, a religious leader who comes to Jesus at night with questions.</p>
        
        <p><span class="transcript-timestamp">05:20</span>Jesus tells him in verse 3: "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God."</p>
        
        <p><span class="transcript-timestamp">12:40</span>Nicodemus is confused: "How can a man be born when he is old? Can he enter a second time into his mother's womb?"</p>
        
        <p><span class="transcript-timestamp">18:15</span>Jesus explains in verse 5-6: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God. That which is born of the flesh is flesh, and that which is born of the Spirit is spirit."</p>
        
        <p><span class="transcript-timestamp">25:50</span>You need a spiritual birth, not just a physical one. You need to be born again by the Spirit of God. This isn't something you can do yourself—it's a work of God.</p>
        
        <p><span class="transcript-timestamp">33:25</span>And then Jesus gives us verse 16, perhaps the most famous verse in all Scripture: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."</p>
        
        <p><span class="transcript-timestamp">42:10</span>God loved. God gave. Whoever believes. This is the gospel, friends. Have you been born again? Do you believe in Jesus Christ? This is the question that matters most.</p>
      </div>
    `
  }
};

// Search Function
function searchSermons() {
  const searchTerm = document.getElementById('sermonSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.sermon-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const excerpt = card.querySelector('.sermon-excerpt').textContent.toLowerCase();
    const series = card.dataset.series.toLowerCase();

    if (title.includes(searchTerm) || excerpt.includes(searchTerm) || series.includes(searchTerm)) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  toggleNoResults(visibleCount);
}

// Allow Enter key for search
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('sermonSearch');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchSermons();
      }
    });
  }
});

// Filter Function
function filterSermons() {
  const formatFilter = document.getElementById('formatFilter').value;
  const seriesFilter = document.getElementById('seriesFilter').value;
  const cards = document.querySelectorAll('.sermon-card');
  let visibleCount = 0;

  cards.forEach(card => {
    let matchesFormat = true;
    let matchesSeries = true;

    // Check format filter
    if (formatFilter !== 'all') {
      const formats = card.dataset.format.split(' ');
      matchesFormat = formats.includes(formatFilter);
    }

    // Check series filter
    if (seriesFilter !== 'all') {
      matchesSeries = card.dataset.series === seriesFilter;
    }

    if (matchesFormat && matchesSeries) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  toggleNoResults(visibleCount);
}

// Sort Function
function sortSermons() {
  const sortBy = document.getElementById('sortBy').value;
  const grid = document.getElementById('sermonsGrid');
  const cards = Array.from(document.querySelectorAll('.sermon-card'));

  cards.sort((a, b) => {
    switch(sortBy) {
      case 'newest':
        return new Date(b.dataset.date) - new Date(a.dataset.date);
      case 'oldest':
        return new Date(a.dataset.date) - new Date(b.dataset.date);
      case 'title':
        return a.dataset.title.localeCompare(b.dataset.title);
      case 'popular':
        return parseInt(b.dataset.views) - parseInt(a.dataset.views);
      default:
        return 0;
    }
  });

  cards.forEach(card => grid.appendChild(card));
}

// Toggle No Results Message
function toggleNoResults(visibleCount) {
  const noResults = document.getElementById('noResults');
  if (visibleCount === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
}

// Open Sermon Modal with Video/Audio
function openSermonModal(sermonId) {
  const sermon = sermonData[sermonId];
  const modal = document.getElementById('sermonModal');
  const modalBody = document.getElementById('modalBody');

  let videoHTML = '';
  if (sermon.videoUrl) {
    videoHTML = `
      <div class="modal-video-container">
        <iframe src="${sermon.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else if (sermon.audioUrl) {
    videoHTML = `
      <div style="padding: 32px; background: var(--color-bg);">
        <audio controls style="width: 100%;">
          <source src="${sermon.audioUrl}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    `;
  }

  modalBody.innerHTML = `
    ${videoHTML}
    <div class="modal-sermon-info">
      <h2>${sermon.title}</h2>
      <div class="sermon-meta">
        <span class="series-tag">${sermon.series}</span>
        <span class="date-tag">${sermon.date}</span>
      </div>
      <p><strong>Scripture:</strong> ${sermon.scripture}</p>
      <p><strong>Speaker:</strong> ${sermon.speaker} · <strong>Duration:</strong> ${sermon.duration}</p>
      <div class="sermon-actions">
        <button class="btn btn-primary" onclick="viewTranscript('${sermonId}')">Read Transcript</button>
        <button class="btn btn-secondary" onclick="closeSermonModal()">Close</button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Sermon Modal
function closeSermonModal() {
  const modal = document.getElementById('sermonModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// View Transcript
function viewTranscript(sermonId) {
  const sermon = sermonData[sermonId];
  const modal = document.getElementById('transcriptModal');
  const transcriptBody = document.getElementById('transcriptBody');

  transcriptBody.innerHTML = `
    <h2>${sermon.title}</h2>
    <div class="sermon-meta">
      <span class="series-tag">${sermon.series}</span>
      <span class="date-tag">${sermon.date}</span>
    </div>
    <p style="margin: 16px 0; padding: 16px; background: var(--color-bg); border-radius: 8px;">
      <strong>Scripture:</strong> ${sermon.scripture} · <strong>Speaker:</strong> ${sermon.speaker} · <strong>Duration:</strong> ${sermon.duration}
    </p>
    ${sermon.transcript}
  `;

  // Close other modal if open
  closeSermonModal();

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Transcript Modal
function closeTranscriptModal() {
  const modal = document.getElementById('transcriptModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modals on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSermonModal();
    closeTranscriptModal();
  }
});

// Close modals on background click
document.getElementById('sermonModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeSermonModal();
  }
});

document.getElementById('transcriptModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeTranscriptModal();
  }
});
