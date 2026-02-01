# 🌙 Sistema de Tema Oscuro/Claro - Imprenta Nuevo Mundo

## ✨ Características Implementadas

### 1. **Botón de Toggle (Luna/Sol)**
- ☀️ **Icono del Sol**: Se muestra cuando estás en modo oscuro (click para cambiar a claro)
- 🌙 **Icono de la Luna**: Se muestra cuando estás en modo claro (click para cambiar a oscuro)
- Ubicado en la esquina superior derecha del header
- Con animaciones suaves de rotación

### 2. **Paleta de Colores**
Se utilizan los 5 colores que proporcionaste + colores complementarios:

```
Verde Claro (Primary):     #7ee87f (color1)
Amarillo (Accent):         #eae55b (color2)  
Marrón Oscuro (Dark):      #131607 (color3)
Gris Marrón (Secondary):   #7e7971 (color4)
Beige/Crema (Light):       #f3eae8 (color5)
```

### 3. **Temas Implementados**

#### 🌞 Modo Claro (Por Defecto)
- Fondo blanco (#ffffff)
- Texto oscuro (#131607)
- Bordes suaves (#eee)
- Acentos en verde (#7ee87f)

#### 🌙 Modo Oscuro
- Fondo muy oscuro (#0a0a0a)
- Texto beige/crema (#f3eae8)
- Bordes sutiles (#333)
- Acentos mantienen el verde (#7ee87f)

### 4. **Funcionalidades**

✅ **Persistencia**: Tu preferencia se guarda en localStorage
✅ **Transiciones Suaves**: Cambios de color con animación de 0.3s
✅ **Responsive**: Botón se adapta en móviles
✅ **Accesibilidad**: Incluye aria-labels y atributos semánticos

## 📁 Archivos Creados/Modificados

### Nuevos Archivos:
- `src/components/ThemeToggle.js` - Componente del botón
- `src/styles/ThemeToggle.css` - Estilos del botón
- `src/styles/theme.css` - Sistema de temas CSS

### Modificados:
- `src/components/Header.js` - Integración del ThemeToggle
- `src/index.css` - Imports de nuevos estilos

## 🎨 Cómo Personalizar los Colores

Si quieres cambiar los colores, edita `src/styles/theme.css`:

```css
:root {
  --color1: #7ee87f;      /* Cambia este */
  --color2: #eae55b;      /* Cambia este */
  --color3: #131607;      /* Cambia este */
  --color4: #7e7971;      /* Cambia este */
  --color5: #f3eae8;      /* Cambia este */
}
```

## 🔧 Cómo Funciona Técnicamente

1. **ThemeToggle.js**: 
   - Guarda la preferencia en localStorage
   - Establece el atributo `data-theme` en el HTML root
   - Renderiza el icono correcto (luna o sol)

2. **theme.css**:
   - Define variables CSS para modo claro (defecto)
   - Redefine las variables para modo oscuro con `[data-theme="dark"]`
   - Todos los elementos usan estas variables

3. **Persistencia**:
   - Al cargar la página, se recupera la preferencia guardada
   - Si no hay preferencia previa, usa modo claro

## 🚀 Uso

Simplemente **haz click en el botón** en la esquina superior derecha del header:
- Si ves la **luna** 🌙 → Estás en modo claro
- Si ves el **sol** ☀️ → Estás en modo oscuro

La preferencia se mantiene entre sesiones automáticamente.

## 💡 Próximas Mejoras (Opcional)

Podrías añadir:
- Detectar preferencia del sistema (prefers-color-scheme)
- Más variaciones de colores personalizables
- Botones adicionales para paletas de colores
- Animaciones más complejas
