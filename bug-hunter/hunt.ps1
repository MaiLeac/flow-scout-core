param(
    [string]$Config = 'configs/template.json',
    [string]$Out,
    [switch]$Demo,
    [switch]$Intake
)
$ErrorActionPreference = 'Stop'
$taskRoot = $PSScriptRoot
$taskBundled = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright'
$taskOldModule = $env:PLAYWRIGHT_MODULE_PATH
$taskOldChannel = $env:PLAYWRIGHT_CHANNEL
try {
    if (-not (Test-Path -LiteralPath (Join-Path $taskRoot 'node_modules\playwright')) -and (Test-Path -LiteralPath $taskBundled)) {
        $env:PLAYWRIGHT_MODULE_PATH = $taskBundled
    }
    if ($Demo -and -not $env:PLAYWRIGHT_CHANNEL) { $env:PLAYWRIGHT_CHANNEL = 'chrome' }
    $taskArgs = @((Join-Path $taskRoot 'src\cli.ts'))
    if ($Demo) { $taskArgs += 'demo' }
    elseif ($Intake) { $taskArgs += @('intake', '--config', (Join-Path $taskRoot $Config)) }
    else { $taskArgs += @('run', '--config', (Join-Path $taskRoot $Config)) }
    if ($Out) { $taskArgs += @('--out', $Out) }
    else { $taskArgs += @('--out', (Join-Path $taskRoot ('runs\' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff')))) }
    & node @taskArgs
    if ($LASTEXITCODE -ne 0) { throw "Bug hunter exited with code $LASTEXITCODE" }
}
finally {
    $env:PLAYWRIGHT_MODULE_PATH = $taskOldModule
    $env:PLAYWRIGHT_CHANNEL = $taskOldChannel
}
