let cachedProjects = null;

export async function getProjects() {
  if (cachedProjects) {
    return cachedProjects;
  }

  try {
    const response = await fetch('https://pinned.berrysauce.dev/get/ItsKillionaire');
    if (response.ok) {
      const data = await response.json();
      cachedProjects = data.map(p => ({...p, repo: p.name.trim(), link: `https://github.com/${p.author}/${p.name}`, image: `https://opengraph.githubassets.com/1/${p.author}/${p.name}`, language: p.language, languageColor: p.languageColor}));
      return cachedProjects;
    } else {
      console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
      return [];
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}
