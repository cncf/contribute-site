const fs = require('fs');
const path = require('path');

try {
  // Read htmltest output
  const output = fs.readFileSync('htmltest-output.txt', 'utf8');
  
  // Parse for errors - htmltest outputs errors in a specific format
  const lines = output.split('\n');
  const errors = [];
  let errorCount = 0;
  
  for (const line of lines) {
    if (line.includes('✘') || line.includes('Error')) {
      errors.push(line.trim());
      errorCount++;
    }
  }
  
  console.log('## Link Check Results\n');
  console.log('**Site checked:** Built site (build/)');
  console.log('**Tool:** htmltest (same as @cncf/techdocs)');
  console.log('**Broken links found:** ' + errorCount + '\n');
  
  if (errorCount > 0) {
    console.log('### Broken Links\n');
    console.log('```');
    errors.slice(0, 50).forEach(error => console.log(error));
    if (errors.length > 50) {
      console.log('... and ' + (errors.length - 50) + ' more errors');
    }
    console.log('```\n');
    
    console.log('### How to Fix\n');
    console.log('1. Review the errors above');
    console.log('2. Update the broken links in the source files');
    console.log('3. Test locally with `npm run check:links`');
    console.log('4. Common fixes:');
    console.log('   - Email links: Use `mailto:` prefix');
    console.log('   - Internal links: Check file paths and anchors');
    console.log('   - External links: Verify URLs are correct\n');
    
    process.exit(1);
  } else {
    console.log('✅ **No broken links found!**\n');
  }
} catch (error) {
  console.error('Error analyzing results:', error.message);
  // Don't fail if we can't analyze - the htmltest step result is what matters
}
