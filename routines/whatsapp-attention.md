# WhatsApp attention

Node only. Reads the last day of WhatsApp via the local plugin and writes
`second-brain/outputs/YYYY-MM-DD-whatsapp-attention.md`.

```bash
node routines/scripts/whatsapp-attention.mjs
node routines/scripts/whatsapp-attention.mjs --group 120363...@g.us
```

Flags questions, approval waits, files, urgency, and money. Never send a reply
from this routine.
