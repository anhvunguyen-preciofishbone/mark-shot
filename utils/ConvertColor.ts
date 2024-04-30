export function generateGradient(colors?: string[]): string {
    if (!colors || colors?.length) {
        return "";
    }

    const numColors = colors.length;
    
    // Calculate the angle step for the gradient
    const angleStep = 360 / numColors;

    // Generate the gradient string
    const gradientStops = colors.map((color, index) => {
        const angle = index * angleStep;
        return `hsl(${angle}deg 100% 50%) ${index * (100 / (numColors - 1))}%`;
    });

    const gradientString = `linear-gradient(${angleStep}deg, ${gradientStops.join(', ')})`;
    return gradientString;
}