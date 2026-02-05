# 🌸 Substituir Flor ArThaJe

## Passo a Passo:

1. **Prepare sua imagem:**
   - Formato: PNG com fundo transparente
   - Tamanho: 500x500px ou maior
   - Nome: `footer-flower.png`

2. **Substitua o arquivo:**
   - Coloque em: `public/images/footer-flower.png`
   - Sobrescreva o SVG atual

3. **Atualize o código (se necessário):**
   - Abra: `components/layout/Footer.tsx`
   - Linha 62: Troque `.svg` por `.png`
   ```tsx
   src="/images/footer-flower.png"
   ```

4. **Ajuste a opacidade (opcional):**
   - Linha 58: Altere `opacity: 0.15` para `0.8` se quiser mais destaque
   - Recomendação vCTO: Mantenha 0.15 para efeito sutil

## ✅ Pronto!
A flor aparecerá automaticamente no canto inferior direito do footer.
