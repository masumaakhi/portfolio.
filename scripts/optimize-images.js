#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images for the portfolio
 * Run with: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const srcDir = path.join(__dirname, '../src/app/assets');
const publicDir = path.join(__dirname, '../public');

function getImageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function generateBlurDataURL(imagePath) {
  // This is a placeholder - in a real implementation, you'd generate
  // a proper blur data URL from the image
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
}

function analyzeImages() {
  console.log('🔍 Analyzing images...\n');
  
  const imageFiles = getImageFiles(srcDir);
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found in src/app/assets');
    return;
  }
  
  console.log(`📊 Found ${imageFiles.length} images:\n`);
  
  imageFiles.forEach((file, index) => {
    const stats = fs.statSync(file);
    const sizeKB = Math.round(stats.size / 1024);
    const fileName = path.basename(file);
    
    console.log(`${index + 1}. ${fileName}`);
    console.log(`   Size: ${sizeKB} KB`);
    console.log(`   Path: ${file}`);
    
    if (sizeKB > 500) {
      console.log(`   ⚠️  Large file - consider optimizing`);
    } else if (sizeKB > 200) {
      console.log(`   ⚡ Medium file - could be optimized`);
    } else {
      console.log(`   ✅ Good size`);
    }
    console.log('');
  });
  
  console.log('💡 Optimization Recommendations:');
  console.log('1. Use WebP format for better compression');
  console.log('2. Implement responsive images with different sizes');
  console.log('3. Add blur placeholders for better UX');
  console.log('4. Use Next.js Image component for automatic optimization');
  console.log('5. Consider using a CDN for image delivery');
}

function generateImageOptimizationReport() {
  const report = {
    timestamp: new Date().toISOString(),
    recommendations: [
      'Convert images to WebP format for better compression',
      'Implement responsive images with srcset',
      'Add blur placeholders for better loading experience',
      'Use Next.js Image component for automatic optimization',
      'Consider lazy loading for below-the-fold images',
      'Optimize images for different screen densities',
      'Use appropriate image dimensions (not larger than needed)',
      'Consider using a CDN for faster image delivery'
    ],
    tools: [
      'Next.js Image component',
      'Sharp (for server-side optimization)',
      'ImageOptim (for batch optimization)',
      'TinyPNG (for compression)',
      'Squoosh (Google\'s image optimization tool)'
    ]
  };
  
  const reportPath = path.join(__dirname, '../image-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`📄 Optimization report saved to: ${reportPath}`);
}

// Main execution
if (require.main === module) {
  console.log('🚀 Image Optimization Analysis\n');
  console.log('=' .repeat(50));
  
  analyzeImages();
  generateImageOptimizationReport();
  
  console.log('\n✨ Analysis complete!');
  console.log('\nNext steps:');
  console.log('1. Review the recommendations above');
  console.log('2. Check the generated report file');
  console.log('3. Implement optimizations using Next.js Image component');
  console.log('4. Test performance with Lighthouse');
}

