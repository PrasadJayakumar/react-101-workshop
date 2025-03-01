# Get the current directory
$rootPath = Get-Location

# Find all node_modules directories recursively
$nodeModulesDirs = Get-ChildItem -Path $rootPath -Recurse -Directory -Filter "node_modules"

# Loop through each node_modules directory and remove it
foreach ($dir in $nodeModulesDirs) {
    # Check if the parent directory is also a node_modules directory
    if ($dir.Parent -notmatch "node_modules") {
        Write-Host "Removing $($dir.FullName)"
        Remove-Item -Recurse -Force -Path $dir.FullName
    }
}

Write-Host "All node_modules directories have been removed."