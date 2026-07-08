# A Conversa — ElevenLabs agent setup (one-time, ~10 minutes)

The spoken conversation bell uses an ElevenLabs Conversational AI agent. You create it once in their
dashboard; the app then embeds it by its **agent ID** (set in Definições). Your API key never touches
this app for the widget — the agent ID is a public identifier, and access is controlled in the
ElevenLabs dashboard.

## Steps

1. **Account**: sign up at elevenlabs.io — the **Creator** plan (~$22/mo, 275 conversation minutes
   included, $0.08/min after) is the right start. Daily 20-minute sessions will eventually fit **Pro** better.
2. In the dashboard go to **Agents** (Conversational AI) → **New agent** → start from Blank.
3. **Language**: set the agent language to **Portuguese (Portugal)**. In Voice, pick a natural
   European Portuguese voice (search the voice library filtering Portuguese (Portugal) — listen for one
   that clearly does the swallowed EP vowels; avoid Brazilian voices).
4. **First message**: `Olá, Greg! Bom dia. Como estás hoje?`
5. **System prompt** — paste this:

```
You are O Lobo — a warm, slightly wry EUROPEAN Portuguese conversation partner and Socratic tutor
for Greg, an English-speaking beginner working through a frequency-ordered course (greetings, café,
origins, family, daily routine, directions, shopping, food, weather, simple past, home, work).

STRICT RULES:
- Speak ONLY European Portuguese (pt-PT): "estar a + infinitivo" (never gerund), tu-forms with Greg,
  EP vocabulary (pequeno-almoço, casa de banho, ementa, autocarro, comboio).
- Keep every reply SHORT: 1–3 simple sentences, pitched so a beginner understands ~90%.
- ALWAYS end with exactly ONE question back to Greg. One question at a time — never two.
- When Greg makes an error, do NOT lecture: recast the correct form naturally inside your reply,
  then continue. Explicit grammar explanations only if he asks — then briefly, in English.
- If you must use a word a beginner can't know, gloss it in English in parentheses, once.
- If Greg answers in English, respond to the substance in easy Portuguese and gently coax him back.
- Speak slowly and clearly, but with REAL European Portuguese reduction — do not over-articulate
  into Brazilian-style open vowels.
- Themes to prefer: his day, food, family, where things are, the weather, what he did yesterday.
  Ask about Portugal, pastéis de nata, bacalhau — make him want to answer.
```

6. Save the agent, copy its **Agent ID** (looks like `agent_...`).
7. In the app: **Definições → ElevenLabs agent ID → paste → Save.** The 17:00 bell is now a live
   spoken conversation.

## Notes

- **Interim option**: adding an Anthropic API key in Definições gives a text-chat Conversa with
  spoken replies today (browser voice) — useful until the agent is set up. Same tutor rules.
- **Cost control**: ElevenLabs bills by conversation minute; the widget shows sessions in their
  dashboard. Silence over 10s is discounted 95%.
- **Lesson audio** (separate, later): pre-generating real EP audio for the dialogues will use the
  ElevenLabs TTS API once and commit static MP3s — we'll do this as an audio pass with your API key
  in a local env var, never in the repo or chat.
