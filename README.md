ClassicSpark V7 - My English Learning Website

I made a pretty simple English learning website called ClassicSpark V7. I call it simple because it doesn’t need an internet connection, it doesn’t have a backend, and it doesn’t have many complex features. It’s just a pure front-end website built with HTML, CSS, and JavaScript.

Being an immigrant, I wanted to create something that could actually help English learners. When I started building this website, I wasn’t just thinking about coding. I was thinking about how to design a tool that could genuinely make language learning easier.

In my own experience, I’ve always struggled with learning English in a scattered way. Sometimes I focused on vocabulary, sometimes on grammar, and other times just reading random texts. But it felt like I was collecting pieces without a way to put them together. I learned a lot, but it never really clicked. So I thought, what if I could create something that connects these parts? Something that lets you learn vocabulary, grammar, and reading all in one place, without switching apps or methods.

That’s how ClassicSpark came to be. It has a few main sections — vocabulary, grammar, classics reading — each of them is simple, but together they create a small learning ecosystem. In the vocabulary section, you can click on any word to see its definition and example sentence. You can even hear how it’s pronounced. If you find a word important, you can save it to your personal word list, which is automatically stored locally. For grammar, I included some classic sentences that you can read aloud and listen to. It’s not fancy, but it works.

To be honest, I struggled a lot while building this project. At first, I thought it would be easy — just set up some vocabulary cards and a pronunciation button, right? But I quickly realized that making it actually work on different devices was a challenge. For example, the speech recognition didn’t work consistently across browsers, and it almost made me give up. I felt like I was making something useless.

But instead of quitting, I changed my approach. I decided to focus on making the core features stable. Instead of perfecting speech recognition, I used the browser’s built-in SpeechSynthesis API for simple text-to-speech. It wasn’t as advanced, but it worked reliably. I also wanted to let users track their study progress, but I didn’t want a database or a login system because that would make it too complicated. So I used localStorage — a local storage method that saves your study records directly in your browser. It’s not as powerful as a cloud service, but it keeps the website lightweight and always available.

Building ClassicSpark taught me that the hardest part of making something isn’t the code, but the balance. I had to constantly remind myself that this is supposed to be a learning tool, not just a flashy tech demo. It’s easy to get carried away with “cool features,” but I wanted something that actually helps.

This website might not have the most advanced technology, but it works. I’m proud of it because it’s useful, and because it’s mine. I know it can be improved — the dictionary can become more dynamic, the grammar section can be more interactive, and the reading section can support more texts. But even as it is, ClassicSpark is my best attempt at creating something simple, practical, and focused.
