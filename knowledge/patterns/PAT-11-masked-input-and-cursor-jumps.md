# PAT-11: Masked Input & Formatted Cursor Snap

## Summary
When users edit pre-filled or formatted input fields (phone numbers, credit card numbers, tax IDs, dates), dynamic input masks automatically reformat the string on keystroke and mistakenly reset the cursor/caret position to the end of the input field or garble subsequent digits.

## Verified Evidence
- `EXT-TT-1976079`: Placing cursor in the middle of a credit card number to edit causes cursor to jump to the end of the field.
- `EXT-TT-1976776`: Pressing backspace to delete a phone number digit from the middle snaps the cursor to the back of the number.
- `EXT-TT-943362`: Typing in middle of card number unexpectedly changes the last 3 digits.

## Agent Exploration Probes
1. Navigate to forms with formatted inputs (checkout phone, credit card, birthday, SSN/tax ID).
2. Type a full valid value: `0912345678` or `4111222233334444`.
3. Use mouse or left-arrow to place cursor in the middle (e.g. after index 4).
4. Press `Backspace` once, or type a single digit `9`.
5. **Defect Condition**: If cursor jumps to the end of the input or mutates trailing digits instead of local character, record as Functional bug.
